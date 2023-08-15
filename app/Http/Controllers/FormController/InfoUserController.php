<?php

namespace App\Http\Controllers\FormController;

use App\Facilities\SqlServerQuery;
use App\Http\Controllers\CustomController;
use App\Models\FormModel\InfoUserModel;
use App\Models\FormModel\ProvinceModel;
use App\Models\User\EmailModel;
use App\Models\User\IdentificationModel;
use App\Models\User\PhoneModel;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Exception;
use PDO;

class InfoUserController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = InfoUserModel::class;

    protected string $index = 'form/infoUser';

    public function index(Request $request)
    {

        try {
            $data = [];
            $cookie = $request->cookie()['cookie'] ?? "";
            if (isset($cookie) && !empty($cookie)) {
                $data = SqlServerQuery::connection_query(
                    "SELECT 
                    A.IdUser, 
                    A.Fullname, 
                    A.cookie, 
                    A.EducationalUnit, 
                    A.StudyPreference, 
                    A.SchoolTypeId, 
                    A.ProvinceId,
                    A.phone,
                    A.identification,
                    A.email
                        FROM [dbo].[User] AS A
                        WHERE A.cookie = '$cookie'"
                )[0] ?? [];
            }
            $provinces = ProvinceModel::findAllProvinces();
            // query para filtrar bien la data...
            return Inertia::render(
                $this->index,
                [
                    'data' => $data,
                    'provinces' => $provinces,
                ]
            );
        } catch (Exception $e) {
            throw new Exception("Se ha producido un error: " . $e->getMessage());
        }
    }

    public function save(Request $request)
    {
        try {
            $request = $request->data;
            if (isset($request) &&  !empty($request)) {
                $cookie = $request['cookie'] ?? '';
                $fullName = $request['Fullname'] ?? '';
                $educationalUnit = $request['EducationalUnit'] ?? '';
                $studyPreference = $request['StudyPreference'] ?? '';
                $province = $request['ProvinceId'] ?? '';
                $schoolType = $request['SchoolTypeId'] ?? '';
                //
                $phone = $request['NumberPhone'] ?? '';
                $email = $request['Email'] ?? '';
                $identification = $request['Identification'] ?? '';
                // Guardar el usuario
                if (!empty($cookie)) {
                    // Comprobar si ya existe, sino, crearlo.
                    $user = $this->model::findRecordByCookie($cookie) ?? [];
                    $userId = $user['IdUser'] ?? '';
                    $this->model::updateOrCreate(
                        ['IdUser' => $userId],
                        [
                            'Fullname' => $fullName,
                            'EducationalUnit' => $educationalUnit,
                            'StudyPreference' => $studyPreference,
                            'ProvinceId' => $province,
                            'SchoolTypeId' => $schoolType,
                            'cookie' => $cookie,
                            'phone' => $phone,
                            'email' => $email,
                            'identification' => $identification
                        ]
                    );
                }
                // Recuperar el usuario por la cookie
                $user = $this->model::findRecordByCookie($cookie);

                return response()->json($user);
            }
        } catch (Exception $e) {
            return throw new Exception("Se ha producido un error: " . $e->getMessage());
        }
    }

    public function updateCookie(Request $request)
    {
        //actualizar la anterior cookie con la nueva
        $oldCookie = $request->request->get('oldCookie');
        $updatedCookie = $request->request->get('updatedCookie');
        $IdUser = $request->request->get('userId');
        SqlServerQuery::connection_execute(
            "UPDATE [dbo].[User]
            SET [cookie] = '$updatedCookie'
            WHERE IdUser = $IdUser AND cookie = '$oldCookie'"
        );
    }
}

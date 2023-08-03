<?php

namespace App\Http\Controllers;

use App\Facilities\SqlServerQuery;
use Illuminate\Http\Request;
use App\Http\Controllers\CustomController;
use App\Models\GetTableFromDB\ResultsModel;
use Inertia\Inertia;
use Exception;

class ResultQuestionController extends CustomController
{
    protected string $index = 'result/resultPage';

    public function index(Request $request)
    {
        try {
            $result = [];
            $cookie = $request->cookie()['cookie'] ?? "";
            // $Date_Question = $request->query('Date_Question');
            $query = "SELECT 
            TOP 3
            Faculty.F_Name,
            C.IdCareer,
            F.Id_User,
            C.C_Name,
            C.C_Link,
            COUNT(CASE WHEN F.ValueQuestion = 1 THEN 1 END) AS TotalCoincidencias,
            (COUNT(CASE WHEN F.ValueQuestion = 1 THEN 1 END) * 100.0) / SUM(CASE WHEN F.ValueQuestion IS NOT NULL THEN 1 ELSE 0 END) OVER () AS Porcentaje
        FROM [dbo].[Career] AS C
        INNER JOIN [dbo].[Career_characteristic_relation] AS R 
            ON C.IdCareer = R.C_id
        INNER JOIN [dbo].[Career_characteristic] AS CC 
            ON R.C_characteristic_Id = CC.IdCCharacteristic
        INNER JOIN [dbo].[Form] AS F 
            ON CC.IdCCharacteristic = F.IdCCharacteristic
        INNER JOIN [dbo].[Area] AS A 
            ON A.IdArea = CC.IdArea
        INNER JOIN [dbo].[Faculty] AS Faculty 
            ON Faculty.IdFaculty = C.F_Id
            WHERE F.Token_Question = '$cookie'
            GROUP BY Faculty.F_Name, C.IdCareer, F.Id_User, C.C_Name, C.C_Link, F.ValueQuestion
            ORDER BY TotalCoincidencias DESC;";
            $result['dataSaved'] = SqlServerQuery::connection_query($query);
            if (isset($result) && !empty($result)) {
                // insertar en la tabla results el resultado
                $currentDateTime = date('Y-m-d H:i:s');
                $resultsModel = new (ResultsModel::class);
                $resultsRecord = $resultsModel::findRecordByCookie($cookie, 'Token_Question');
                if (isset($resultsRecord) && empty($resultsRecord)) {
                    foreach ($result['dataSaved'] as $dataToInsert) {
                        $queryResult = "INSERT INTO [dbo].[Results] (
                        [UserId],
                        [Token_Question],
                        [Percentaje],
                        [CareerResultId],
                        [CareerResultName],
                        [created_at],
                        [updated_at]
                    )
                    VALUES (
                        " . $dataToInsert['Id_User'] . ",
                        '" . $cookie . "',
                        " . $dataToInsert['Porcentaje'] . ",
                        " . $dataToInsert['IdCareer'] . ",
                        '" . $dataToInsert['C_Name'] . "',
                        '" . $currentDateTime . "', -- Fecha y hora actual para created_at
                        '" . $currentDateTime . "'  -- Fecha y hora actual para updated_at
                    );";
                        SqlServerQuery::connection_execute($queryResult);
                    }
                }
            }
            // Buscar por token los resultados
            return Inertia::render(
                $this->index,
                [
                    'cookie' => $cookie,
                    'results' => $result,
                ]
            );
        } catch (Exception $e) {
            throw new Exception("Se ha producido un error: " . $e->getMessage());
        }
    }
}

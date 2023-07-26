<?php

namespace App\Http\Controllers;

use App\Facilities\SqlServerQuery;
use Illuminate\Http\Request;
use App\Http\Controllers\CustomController;
use Inertia\Inertia;

class ResultQuestionController extends CustomController
{
    protected string $index = 'result/resultPage';

    public function index(Request $request)
    {
        $result = [];
        $cookie = $request->cookie()['cookie'] ?? "";
        $Date_Question = $request->query('Date_Question');
        $query = "SELECT 
            DISTINCT
            TOP 3
            Faculty.F_Name,
            C.C_Name,
            C.C_Link,
            COUNT(CASE WHEN F.ValueQuestion = 5 THEN 1 END) AS TotalCoincidencias,
            (COUNT(CASE WHEN F.ValueQuestion = 5 THEN 1 END) * 100.0) / sub.TotalRespuestas AS Porcentaje
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
        CROSS JOIN (SELECT COUNT(*) AS TotalRespuestas FROM [dbo].[Form]) AS sub
        WHERE F.Token_Question = '$cookie' AND F.Date_Question ='$Date_Question'
        GROUP BY Faculty.F_Name, C.C_Name, C.C_Link, sub.TotalRespuestas
        ORDER BY TotalCoincidencias DESC;";
        $result['dataSaved'] = SqlServerQuery::connection_query($query);

        // Buscar por token los resultados
        return Inertia::render(
            $this->index,
            [
                'cookie' => $cookie,
                'results' => $result,
            ]
        );
    }
}

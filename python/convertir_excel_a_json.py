import ast
import csv
import re
# from ast import literal_eval

# Este archivo será usado para tabular la informacion desde un excel
# TODO: tener en cuenta que esto no escribe informacion, solo la lee
# Tambien considerar guardar el nuevo excel en el mismo directio
def leer_csv(nombre_archivo):
    with open(nombre_archivo, 'r', newline='', encoding='utf-8') as archivo:
        lector = csv.DictReader(archivo)
        for fila in lector:
            list_of_elements_to_convert = [
                'estrategias_para_elegir_carrera',
                'factores_afectan_tu_decision',
            ]
            for elements_to_convert in list_of_elements_to_convert:    
                # Obtener el valor de la columna 'estrategias_para_elegir_carrera'
                elements = fila[elements_to_convert]
                 # Separar las frases utilizando expresiones regulares y el patrón "([^;]+)"
                elementos = re.findall(r'([^;]+)', elements)
                # Actualizar el valor en la fila del diccionario
                fila[elements_to_convert] = elementos
                # Imprimir la fila actualizada
                print(fila[elements_to_convert])
            
# Ruta del archivo CSV a leer
archivo_csv = r'C:/Users/Niki/OneDrive/Escritorio/encuesta_copy.csv'

leer_csv(archivo_csv)
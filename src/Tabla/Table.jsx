import React from 'react'

export function Table({encabezado,datos,estilo}){
    return(
        <>
            <table className={estilo?estilo:""}>
                <thead>
                    <tr>
                        {
                            encabezado && encabezado.map(
                                title=>{
                                    return (
                                        <th key={title.mostrar}>
                                            {title.mostrar}
                                        </th>
                                    )
                                }
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        datos && datos.map(
                            (date,i)=>{
                                return (
                                        <tr key={`${date[encabezado[0].nombre]}${i}`}>
                                            {
                                                encabezado && encabezado.map(
                                                    (type,i)=>{
                                                        return (
                                                            <td key={`${date[type.nombre]}${i}`}>
                                                                {
                                                                    date[type.nombre]
                                                                }
                                                            </td>
                                                        )
                                                    }
                                                )
                                            }
                                        </tr>
                                    )
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
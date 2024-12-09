import React from "react";

function StudentTable(){
    const students=[
        {id:1,name:"Gokul",marks:20},
        {id:2,name:"Omkar",marks:50}
    ];

    return(
        <table border="1px" solid black>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
            </thead>

            <tbody>
                {students.map((student)=>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.marks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable;
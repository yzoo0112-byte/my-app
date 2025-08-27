const students =[
    {
        id: 1,
        name: "은석",
    },
    {
        id: 2,
        name: "해성",
    },
    {
        id: 3,
        name: "민우",
    },
    {
        id: 4,
        name: "예주",
    },
];

function AttendanceBook(prop){
    return(
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
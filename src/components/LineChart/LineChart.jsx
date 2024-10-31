import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const subjectMarksData = [
        {
            "id": 1,
            "student": "Alice",
            "mathMarks": 78,
            "physicsMarks": 82,
            "chemistryMarks": 75
        },
        {
            "id": 2,
            "student": "Bob",
            "mathMarks": 85,
            "physicsMarks": 79,
            "chemistryMarks": 80
        },
        {
            "id": 3,
            "student": "Charlie",
            "mathMarks": 92,
            "physicsMarks": 88,
            "chemistryMarks": 90
        },
        {
            "id": 4,
            "student": "David",
            "mathMarks": 68,
            "physicsMarks": 72,
            "chemistryMarks": 70
        },
        {
            "id": 5,
            "student": "Eva",
            "mathMarks": 74,
            "physicsMarks": 78,
            "chemistryMarks": 76
        },
        {
            "id": 6,
            "student": "Frank",
            "mathMarks": 88,
            "physicsMarks": 85,
            "chemistryMarks": 82
        },
        {
            "id": 7,
            "student": "Grace",
            "mathMarks": 95,
            "physicsMarks": 91,
            "chemistryMarks": 93
        },
        {
            "id": 8,
            "student": "Hank",
            "mathMarks": 81,
            "physicsMarks": 77,
            "chemistryMarks": 79
        },
        {
            "id": 9,
            "student": "Ivy",
            "mathMarks": 90,
            "physicsMarks": 89,
            "chemistryMarks": 87
        },
        {
            "id": 10,
            "student": "Jack",
            "mathMarks": 76,
            "physicsMarks": 74,
            "chemistryMarks": 72
        }
    ]
    
    

    return (
      
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
            <XAxis dataKey="student"></XAxis>
            <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
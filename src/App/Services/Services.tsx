import { Table } from "react-bootstrap";
import courses from "./Courses.json"

interface Course {
    title: string;
    description: string;
    cost: number;
}
export function Services(){
    return(
        <div className="p-lg-5">
            <h3 className="text-center">Our Services</h3>
            <p>
                Fictional Private Tutors, your premier destination for the absurd, the bizarre, and the utterly
                nonsensical, is thrilled to unveil our latest catalogue of services and classes designed to tickle
                your funny bone and stretch the limits of your imagination.
            </p>
            <br/>
            <div className="mx-auto">
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr className="text-center">
                        <th>Course</th>
                        <th>Description</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map((item: Course) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.cost}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
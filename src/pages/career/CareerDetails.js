import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
    const career = useLoaderData();

    return (
        <div className="career-details">
            <h2>{career.title}</h2>
            <p>Location: {career.location}</p>
            <p>Starting Salary: {career.salary}</p>
        </div>
    );
}

export const careerLoader = async ({ params }) => {
    const id = params.id;
    const res = await fetch('http://localhost:8000/careers/' + id);

    if (!res.ok) {
        throw Error('Couldn\'t fetch the data');
    }

    return res.json();
}

export default CareerDetails;
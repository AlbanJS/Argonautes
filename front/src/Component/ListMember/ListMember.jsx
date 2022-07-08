import {useEffect, useState} from "react";
const ListMember = () => {

    const [members, setMembers] = useState([]);

    const fetchMembers = async () => {
        const response = await fetch("http://localhost:8000/api/personnes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const data = await response.json();
        setMembers(data);
    }

    useEffect(() => {
        fetchMembers();
    },[]);

    const handleDelete = async (id) => {
         await fetch(`http://localhost:8000/api/personnes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        fetchMembers();
    }

    return (
        <section className="member-list">
            {members.map((member, index) => (
                <div key={index} className="group">
                <div className="member-item">{member.name}</div>
                <button onClick={() => handleDelete(member.id)} className="btn-delete">X</button>
                </div>
            ))}
        </section>
    )
}

export default ListMember;
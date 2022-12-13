import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [userData, setUserData] = useState([]);
    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/signup");
    }


    useEffect(() => {
        const getUser = localStorage.getItem("user");
        if (getUser && getUser.length) {
            setIsActive(true)
            setUserData(JSON.parse(getUser))
        }
    }, [])

    return (
        <>
            {isActive &&
                <li className="nav-item">
                    <Link to={"/signup"} className="nav-link" onClick={() => userlogout()}>
                        Log Out
                    </Link>
                </li>
            }

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.N.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Last</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {userData?.map((data: { firstName: string, lastName: string, email: string }, index) => {
                            return <>
                                <th scope="row">{index + 1}</th>
                                <td>{data?.firstName}</td>
                                <td>{data?.lastName}</td>
                                <td>{data?.email}</td>
                            </>
                        })}

                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Home
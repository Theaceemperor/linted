
import { useEffect } from "react";

export default function Blogcontent({children, header}) {
    useEffect(() => {
        const collapse = document.querySelectorAll('.acctop');
        const myAcc = document.querySelector('.acc')
    
        Array.from(collapse).forEach(function(e) {
            e.addEventListener('click', function (e) {
                myAcc.style.transition = "all 0.3s";
                const current = e.target.parentElement;
                current.classList.toggle('active');
            })
        })
    })

    return (
        <>
            <main>
                <div className="accon">
                    <div className="acc">
                        <div className="acctop">
                            <h2>{header}</h2>
                        </div>
                        <hr></hr>
                        <div className="acc-content">
                                <p className="para">{children}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

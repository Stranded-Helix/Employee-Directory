import React from "react";

export default function EmployeeCard() {
    return (
        <div class="card horizontal">
            <div class="card-image">
                <img src="" />
            </div>
            <div class="card-stacked blue-gradient">
                <div class="card-content">
                    <h5>Stolen Canvas</h5>
                    <p>Heroku hosted website simulating a e-commerce site selling great works of art using HTML, CSS,
                        express.js</p>
                </div>
                <div class="card-action">
                    <a href="https://afternoon-ocean-89274.herokuapp.com/">Deployed App</a>
                    <a href="https://github.com/chancevaughn/Stolen-Canvas">Github</a>
                </div>
            </div>
        </div>
    )
}
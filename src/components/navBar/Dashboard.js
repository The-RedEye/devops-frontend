import React from 'react';
import AddingTodo from '../bodyComponents/AddingTodo'
import CreatingTasks from '../bodyComponents/CreatingTasks'
import TodoForm from '../bodyComponents/TodoForm'

//isnt working not sure why
function Dashboard(props) {
    return (
        <div className='vh-100 bg-danger'>
            {/* div for the buttons bar at the top */}
            <div className='d-flex flex-row-reverse mt-5 pt-3 px-2'>
                <CreatingTasks />
            </div>
            
            
                <div class="container p-3 mt-5 bg-warning w-50 mw-75">
                <div class="card-columns">
                                    <div class="card">
                                        <img class="card-img-top" src="..." alt="Card image cap"/>
                                        <div class="card-body">
                                        <h5 class="card-title">Card title that wraps to a new line</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="card-img-top" src="..." alt="Card image cap"/>
                                        <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card bg-primary text-white text-center p-3">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                        <footer class="blockquote-footer">
                                            <small>
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                        </blockquote>
                                    </div>
                                    <div class="card text-center">
                                        <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="card-img" src="..." alt="Card image"/>
                                    </div>
                                    <div class="card p-3 text-right">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">
                                            <small class="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                        </blockquote>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    </div>
                    <div className='row'>
                        <div className='card-colums'>
                                <div class="card p-3">
                                    <blockquote class="blockquote mb-0 card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                    </blockquote>
                                </div>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default Dashboard;
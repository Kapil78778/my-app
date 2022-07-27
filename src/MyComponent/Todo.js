import React from 'react'

export default function Todo() {
  return (
    <div>
        <form class="d-flex" role="Name">
        <input class="form-control me-2" type="Name" placeholder="Name" aria-label="Name"/>
        <button class="btn btn-outline-success" type="submit">Name</button>
      </form>
      <form class="d-flex" role="E-mail">
        <input class="form-control me-2" type="E-mail" placeholder="E-mail" aria-label="E-mail"/>
        <button class="btn btn-outline-success" type="submit">E-mail</button>
      </form>
      <form class="d-flex" role="Room No.">
        <input class="form-control me-2" type="Name" placeholder="Room No." aria-label="Room No."/>
        <button class="btn btn-outline-success" type="submit">Room No.</button>
      </form>
      <button type="button" class="btn btn-primary">Submit</button>
    </div>
  )
}


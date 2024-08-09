import React from 'react'
import {
  Link
} from "react-router-dom";
export const Foot = () => {
  return (
    <>
  <footer class="py-3 mt-5">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">Home</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">Features</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">Pricing</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">About</Link></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
    </>
  )
}

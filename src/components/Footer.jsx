import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <nav>
      <ul>
        <li>
        <Link href="#">
                    <a target="_blank" className="btn hover:text-accent-primary-pensionera">
                      <FontAwesomeIcon
                        className="text-accent-secondary-pensionera mr-2 "
                        icon={['fab', 'facebook']}
                      />
                      Facebook
                    </a>
                  </Link>
        </li>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </nav>
  )
}

export default Footer
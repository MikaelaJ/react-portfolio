import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompanyProfile from "../constants/CompanyProfile";


export default function Footer() {
  const profiles = [CompanyProfile.LINKEDIN, CompanyProfile.INSTAGRAM];
  console.log(profiles)

  return (
    <nav>
      <ul>
        {profiles.map((profile, i) => (
          <li key={i}>
            <Link href={profile.link}>
              <a target="_blank" className="btn hover:text-accent-primary-pensionera">
                <FontAwesomeIcon
                  className="text-accent-secondary-pensionera mr-2 "
                  icon={[profile.iconFamily, profile.iconName]}
                />
                {profile.name}
              </a>
            </Link>
          </li>
        ))}
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </nav>
  )
}

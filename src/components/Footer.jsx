import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompanyProfile from "../constants/CompanyProfile";


export default function Footer() {
  const profiles = [CompanyProfile.LINKEDIN, CompanyProfile.INSTAGRAM];
  console.log(profiles)

  return (
    <nav>
      <ul className="text-right">
        {profiles.map((profile, i) => (
          <li key={i} className="mr-4">
            <Link href={profile.link}>
              <a target="_blank" className="">
                <FontAwesomeIcon
                  className="mx-2"
                  icon={[profile.iconFamily, profile.iconName]}
                />
                {profile.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

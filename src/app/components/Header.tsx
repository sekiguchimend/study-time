import React from 'react';
import './Header.css'; // CSSファイルを作成し、ここでインポートします
import PsychologyIcon from '@mui/icons-material/Psychology';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <h1><span className="red-text">S</span>tudy</h1>
      <nav>
       <ul>
       <Link href=".">
        <li><PsychologyIcon fontSize="large" ></PsychologyIcon>
        <span className='con'>
              <span className="red-text">H</span>ensachi
        </span>
        </li>
        </Link>
        <Link href="/Brain">
        <li><EditNoteIcon fontSize="large" ></EditNoteIcon>
        <span className='con'>
             <span className="red-text">A</span>nkiryoku
        </span>
        </li>
        </Link>
       </ul>
      </nav>
    </header>
  );
}
import React from 'react';
import './Header.css'; // CSSファイルを作成し、ここでインポートします
import PsychologyIcon from '@mui/icons-material/Psychology';
import EditNoteIcon from '@mui/icons-material/EditNote';
export default function Header() {
  return (
    <header>
      <h1><span className="red-text">S</span>tudy</h1>
      <nav>
       <ul>
        <li><PsychologyIcon fontSize="large" ></PsychologyIcon><a href="#"><span className="red-text">H</span>ensachi</a></li>
        <li><EditNoteIcon fontSize="large" ></EditNoteIcon><a href="#"><span className="red-text">A</span>nkiryoku</a></li>
       </ul>
      </nav>
    </header>
  );
}
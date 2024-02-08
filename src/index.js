import { createInfo, createContainer } from './content_page/content'
import './index.css';

document.getElementById('content').appendChild(createInfo());
document.getElementById('content').appendChild(createContainer());
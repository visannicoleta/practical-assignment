// import { LitElement, html, css } from "lit";
// import logo from "../assets/logo.png";

// class CustomHeader extends LitElement {
//   static styles = css`
//     :host {
//       display: block;
//       background-color: #f0f0f0;
//       color: #333;
//       border-bottom: 2px solid #ff6600; /* Orange border */
//     }
//     header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding: 1rem 2rem;
//       background-color: #fff;
//       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Modern shadow effect */
//     }
//     .logo img {
//       height: 50px; /* Adjust as needed */
//       width: auto;
//     }
//     nav ul {
//       display: flex;
//       gap: 1rem;
//       list-style: none;
//       padding: 0;
//       margin: 0;
//     }
//     nav {
//       display: flex;
//       flex-direction: column;
//     }

//     nav a {
//       display: flex;
//       align-items: center;
//       margin-bottom: 10px;
//       text-decoration: none;
//       color: #007bff;
//       font-size: 16px;
//       padding: 10px;
//       border-radius: 5px;
//       transition: background-color 0.3s ease;
//     }

//     nav a:hover {
//       background-color: #e2e6ea;
//     }

//     nav a.selected {
//       background-color: #007bff;
//       color: #fff;
//     }

//     nav a font-awesome-icon {
//       margin-right: 8px;
//     }

//     nav a span {
//       margin-left: 8px;
//     }

//     @media (max-width: 600px) {
//       header {
//         flex-direction: column;
//         align-items: flex-start;
//       }
//       nav ul {
//         flex-direction: column;
//         gap: 0.5rem;
//       }
//       nav {
//         flex-direction: row;
//         justify-content: space-around;
//       }

//       nav a {
//         margin-bottom: 0;
//       }
//     }
//   `;

//   static properties = {
//     selectedLink: { type: String },
//   };

//   constructor() {
//     super();
//     this.selectedLink = 'home'; // Default selected link
//   }

//   render() {
//     return html`
//       <header>
//         <div class="logo">
//           <img src="${logo}" alt="Logo" />
//         </div>
//         <nav>
//           <ul>
//             <li><router-link to="/" class="${this.selectedLink === 'home' ? 'selected' : ''}" @click="${() => this.selectLink('home')}">Home</router-link></li>
//             <li><router-link to="/contact" class="${this.selectedLink === 'contact' ? 'selected' : ''}" @click="${() => this.selectLink('contact')}">Contact</router-link></li>
//             <li><router-link to="/account" class="${this.selectedLink === 'account' ? 'selected' : ''}" @click="${() => this.selectLink('account')}">My account</router-link></li>
//           </ul>
//         </nav>
//       </header>
//     `;
//   }

//   selectLink(link) {
//     this.selectedLink = link;
//   }

//   // Example of a custom method
//   customMethod() {
//     console.log("This is a custom method in the CustomHeader class");
//   }
// }

// customElements.define("custom-header", CustomHeader);
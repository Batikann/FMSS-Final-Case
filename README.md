

<h1>Project Description</h1>
<p>When the page is first loaded, a loading structure is displayed on the screen to improve the user experience until the request sent to the API is returned. When the data arrives, there is a blur effect on the images until they are loaded to minimize performance losses, and the images that the user cannot see are not loaded. Initially, 10 ships are returned from our API. The user can search by ship name or model by entering it into the input field. I added 2 protection mechanisms for validation. Firstly, if the user does not enter any value, the search button remains inactive. Secondly, if the user presses the enter key, an error modal screen appears to warn the user. If the user wants to load more ships on the homepage, they can do so with the button at the bottom of the page. Similarly, when the user clicks the button to load more ships, they are faced with a loading screen until the request is returned. If the user wants to get more information about any ship on the screen, they can click on it to go to the detail page, and they can return to the homepage with the back button on the detail page. The project is fully responsive and compatible with all devices. The user can change the theme through the button located in the top right corner.</p>

<a href="https://fmss-practium-final-case.netlify.app/">The live version of the project.</a>

<h2>How do I install the project?</h2>
<p>Please paste the following code line in the terminal <code>git clone https://github.com/Batikann/FMSS-Final-Case.git</code></p>
<p>Open the file named <code>FMSS-Final-Case</code> and write the following command lines in the terminal sequentially.</p>
<p>1. <code>npm install</code></p>
<p>2. <code>npm run dev</code></p>
<p>Open <code>http://localhost:5173/</code> to view the application in the browser.</p>

<h2>The technologies I used in this project are:</h3>
<ul>
<li>React</li>
<li>Redux Toolkit</li>
<li>React Router</li>
<li>Axios</li>
<li>SWAPI API (Star Wars API)</li>
<li>TailwindCSS</li>
<li>React Icons</li>
<li>React Lazy Load Image Component</li>
</ul>

<h2>Project Images</h3>

<h3>Loading Screen</h3>
<img src="https://user-images.githubusercontent.com/71382413/235081342-51b22be3-743d-44c0-91db-5e02c257f7a3.png" alt="loading-screen" width="800px"/>


<h3>Dark Mode Desktop</h5>
<img src="https://user-images.githubusercontent.com/71382413/234687046-657b5b39-7025-4cad-8719-07f196d4f2fb.png" alt="dark-mode-desktop" width="800px"/>
<img src="https://user-images.githubusercontent.com/71382413/234687269-8c3cd017-9bac-4b3a-a35c-eecee040fcf4.png" alt="dark-mode-desktop-load-more" width="800px"/>

<h3>Light Mode Desktop</h5>
<img src="https://user-images.githubusercontent.com/71382413/234688296-dfabdedf-b03c-4f97-95ed-554121490cb0.png" alt="light-mode-desktop" width="800px"/>

<h3>Ship Details Page Dark Mode</h5>
<img src="https://user-images.githubusercontent.com/71382413/234688803-922d2e8f-6ebc-492f-b8f8-5f8dbef9e3f4.png" alt="details-page-dark-mode" width="800px"/>

<h3>Ship Details Page Light Mode</h5>
<img src="https://user-images.githubusercontent.com/71382413/234689390-b4155cf9-116f-4fb5-b11b-0f1cb45248d1.png" alt="details-page-light-mode" width="800px"/>

<h3>Error Modal</h5>
<img src="https://user-images.githubusercontent.com/71382413/234692111-1bcc120f-e07b-434d-b23c-15069955ec36.png" alt="error-modal" width="800px"/>

<h3>Mobile Device Home Page</h5>
<img src="https://user-images.githubusercontent.com/71382413/234695477-4ac8d0e6-5562-47ed-a8df-0a10cc3dff15.png" alt="mobile-home-page" width="400px" />

<h3>Mobile Device Detail Page</h5>
<img src="https://user-images.githubusercontent.com/71382413/234697846-c04b8a82-1544-4e0b-86e4-6eecd9cd6dd2.png" alt="mobile-detail-page" width="400px" "/>







const fragment = 
`<example> 
   <h1>jspm, SystemJS, Babel, Seed</h1>
 </example>`;

export default function(element) {
  element.insertAdjacentHTML('afterbegin', fragment);
};

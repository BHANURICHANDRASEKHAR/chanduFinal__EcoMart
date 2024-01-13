import React from 'react'
import { Collapse } from 'antd';
function Faq() {
    const text=(
        <p style={{ paddingLeft: 24 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam. Perspiciatis, porro!
      </p>
    )
    const items= [
        {
          key: '1',
          label: 'What happens when I update my email address (or mobile number)?',
          children:text
        },
        {
          key: '2',
          label: 'Does it improve the user experience of a website?',
          children:text
        },
        {
          key: '3',
          label: 'Does it improve the user experience of a website?',
          children:text
        },
      ];
  return (
   
<div className='m-3'>
  <h2>FAQ</h2>
<Collapse className='mt-5' items={items} bordered={false} defaultActiveKey={['1']} />  

</div>
 )
}

export default Faq;

// import React from 'react';
// import './index.css';
// import type { CollapseProps } from 'antd';
// import { Collapse } from 'antd';

// const text = (
//   <p style={{ paddingLeft: 24 }}>
//     A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
//     as a welcome guest in many households across the world.
//   </p>
// );

// const items: CollapseProps['items'] = [
//   {
//     key: '1',
//     label: 'This is panel header 1',
//     children:text
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children:text
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children:text
//   },
// ];

// const App: React.FC = () => <Collapse items={items} bordered={false} defaultActiveKey={['1']} />;

// export default App;
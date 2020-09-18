import React from 'react'

import Indicator from 'react-carousel-indicator'
import 'react-carousel-indicator/dist/index.css'

const App = () => {
  const arr = [1, 2, 3, 4, 5]
  return (
    <Indicator itemsPerSlide={2} itemGap={20}>
      {/* {templateCards.map(templateId => {
          const template = templatesById[templateId];
          return <TemplateCard key={template.id} template={template} hasIcon />;
        })} */}
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div key={index}>1</div>
      ))}
    </Indicator>
  )
}

export default App

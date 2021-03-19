import React from 'react'
import { useTrail, animated, config } from 'react-spring'

function Trail({ children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: config.stiff,
    opacity: 0,
    // height: open ? 110 : 0,
    from: { opacity: 1 },
  })
  return (
    <div {...props}>
      <div>
        {trail.map(({ ...rest }, index) => (
          <a.div
            key={items[index]}
            style={{
              ...rest,
            }}
          >
            <a.div>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

const In = () => {
  return (
    <div className="w-full h-screen">
      <Trail>
        <div className="bg-blue  z-40">Hello</div>
      </Trail>
    </div>
  )
}

export default In

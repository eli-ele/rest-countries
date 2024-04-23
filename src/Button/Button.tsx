import { buttonTypes } from "..//..//src/types"

const Button = ({ onClick,
    width,
    height,
    children,
    border,
}: buttonTypes) => {
    
  return (
      <div>
          <button className="buttonregion"
              onClick={onClick}
              style={{
                  width: width,
                  height: height,
                  border: border,
              }}>
              {children}
              </button>
    </div>
  )
}

export default Button
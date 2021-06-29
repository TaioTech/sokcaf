interface ChildProps {
  color: string;
  onClick: () => void
}

// One example (Does not account for added children for ChildProps)
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
    </div>
  )
}

//  Function Component (Automatically conceives concept of children received)
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>

  )
}

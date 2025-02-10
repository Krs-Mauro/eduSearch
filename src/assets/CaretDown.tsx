const CaretDown = ({ height }: { height: number }) => {
  return (
    <svg
      width={(5 / 3) * height}
      height={height}
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.732225 0.982225C1.70855 0.00592498 3.29145 0.00592498 4.26777 0.982225L15 11.7145L25.7323 0.982225C26.7085 0.00592498 28.2915 0.00592498 29.2677 0.982225C30.244 1.95855 30.244 3.54145 29.2677 4.51775L16.7677 17.0178C15.7915 17.994 14.2085 17.994 13.2323 17.0178L0.732225 4.51775C-0.244075 3.54145 -0.244075 1.95855 0.732225 0.982225Z"
        fill="black"
      />
    </svg>
  )
}

export default CaretDown

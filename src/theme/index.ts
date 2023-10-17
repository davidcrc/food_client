type OpacityType = number | string

const pallete = [
  {
    // orange
    text: "#f97316",
    bgColor: (opacity: OpacityType) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // dark gray
    text: "#334155",
    bgColor: (opacity: OpacityType) => `rgba(30, 41, 59, ${opacity})`,
  },
  {
    // purple
    text: "#7c3aed",
    bgColor: (opacity: OpacityType) => `rgba(167, 139, 250, ${opacity})`,
  },
  {
    // green
    text: "#009950",
    bgColor: (opacity: OpacityType) => `rgba(0, 179, 89, ${opacity})`,
  },
  {
    // teal
    text: "#14b8a6",
    bgColor: (opacity: OpacityType) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // red
    text: "#dc2626",
    bgColor: (opacity: OpacityType) => `rgba(248, 113, 113, ${opacity})`,
  },
  {
    // yellow
    text: "#ffca28",
    bgColor: (opacity: OpacityType) => `rgba(255, 202, 40, ${opacity})`,
  },
  {
    // brown
    text: "#8a4f31",
    bgColor: (opacity: OpacityType) => `rgba(138, 79, 49, ${opacity})`,
  },
  {
    // pink
    text: "#f05d93",
    bgColor: (opacity: OpacityType) => `rgba(240, 93, 147, ${opacity})`,
  },
]

export const themeColors = {
  ...pallete[0],
}

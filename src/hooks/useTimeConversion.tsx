export const useTimeConversion = () => {
  const timeConvert = (time: number) => {
    const hour = Math.floor(time / 60)
    const min = time % 60

    return { hour, min }
  }

  const conversionRuntime = (time: number) => {
    const { hour, min } = timeConvert(time)

    return `${hour} hr ${min} minute`
  }

  const conversionRuntimeColon = (time: number) => {
    const { hour, min } = timeConvert(time)

    return `${hour} hr : ${min} minute`
  }

  return { conversionRuntime, conversionRuntimeColon }
}

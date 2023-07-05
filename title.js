const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    const repeatedGreetings = async () => {
      await sleep(300)
      document.title = "Earth"
      await sleep(300)
      document.title = "Earth2023"
      await sleep(300)
      document.title = "Earth2023 Antivirus"
      await sleep(300)
      document.title = "Earth2023 Antivirus (Earth"
      await sleep(300)
      document.title = "Earth2023 Antivirus (Earth2023 "
      await sleep(300)
      document.title = "Earth2023 Antivirus (Earth2023 杀毒软件)"
    }
    repeatedGreetings()
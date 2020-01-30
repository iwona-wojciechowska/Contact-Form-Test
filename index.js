const { Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
  .forBrowser("firefox")
  .build();

  async function contactForm() {
      try {
          await driver.get("https://testblogselenium.wordpress.com/contact/");
          await driver.findElement(By.id("g2-name")).sendKeys("myName");
          await driver.findElement(By.id("g2-email")).sendKeys("myEmail@gmail.com");
          await driver.findElement(By.id("contact-form-comment-g2-comment")).sendKeys("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
          await driver.findElement(By.className("accept")).click();
          let button = driver.findElement(By.className("pushbutton-wide"));
          driver.executeScript("arguments[0].scrollIntoView(false);", button);
          await new Promise(r => setTimeout(r, 2000));
          await button.click();
         
      } catch (error) {
          console.log(error) 
      }
      
  }

  contactForm();

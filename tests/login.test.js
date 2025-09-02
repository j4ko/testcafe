import { Selector } from "testcafe";

fixture("Login Test").page("http://zero.webappsecurity.com/login.html");

test("User cannot login with invalid credentials", async (t) => {
  const loginField = Selector("#user_login");
  const passwordField = Selector("#user_password");
  const submitButton = Selector(".btn-primary");
  const errorMessage = Selector(".alert-error").innerText;

  await t.click(loginField);
  await t.expect(loginField.exists).ok();
  await t.expect(passwordField.exists).ok();

  await t.typeText(loginField, " User", { paste: true });
  await t.typeText(passwordField, "Password", { paste: true });
  await t.click(submitButton);

  await t.expect(errorMessage).contains("Login and/or password are wrong.");
});

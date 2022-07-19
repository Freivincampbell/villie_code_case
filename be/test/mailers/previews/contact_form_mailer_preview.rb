# Preview all emails at http://localhost:3000/rails/mailers/contact_form_mailer
class ContactFormMailerPreview < ActionMailer::Preview
  def contact_form_email
    contact_form = ContactForm.new(name: "John Doe", email: "doe@test.com", phone: "123456789", subject: "Test", message: "Test message")
    ContactFormMailer.with(contact_form: contact_form).contact_form_email
  end

end

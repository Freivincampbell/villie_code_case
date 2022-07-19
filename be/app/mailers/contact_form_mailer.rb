class ContactFormMailer < ApplicationMailer
  def contact_form_email
    puts params[:contact_form]
    @contact_form = params[:contact_form]

    # mail(to: 'freivin12@gmail.com', subject: "You have a new contact form message")
    mail(to: 'info@genderrevealgame.com', subject: "You have a new contact form message")

    @contact_form.status = "sent"
    @contact_form.save
  end
end

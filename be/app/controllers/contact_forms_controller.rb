class ContactFormsController < ApplicationController

  # GET /contact_forms
  def index
    @contact_forms = ContactForm.all

    render json: @contact_forms
  end

  # POST /contact_forms
  def create
    @contact_form = ContactForm.new(contact_form_params)

    if @contact_form.save
      ContactFormMailer.with(contact_form: @contact_form).contact_form_email.deliver_later
      render json: @contact_form, status: :created, location: @contact_form
    else
      render json: @contact_form.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def contact_form_params
      params.require(:contact_form).permit(:name, :email, :phone, :subject, :message)
    end
end

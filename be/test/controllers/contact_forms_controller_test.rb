require "test_helper"

class ContactFormsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contact_form = contact_forms(:one)
  end

  test "should get index" do
    get contact_forms_url, as: :json
    assert_response :success
  end

  test "should create contact_form" do
    assert_difference("ContactForm.count") do
      post contact_forms_url, params: { contact_form: { email: @contact_form.email, message: @contact_form.message, name: @contact_form.name, phone: @contact_form.phone, status: @contact_form.status, subject: @contact_form.subject } }, as: :json
    end

    assert_response :created
  end

  test "should show contact_form" do
    get contact_forms_url(@contact_form), as: :json
    assert_response :success
  end

  test "should update contact_form" do
    patch contact_forms_url(@contact_form), params: { contact_form: { email: @contact_form.email, message: @contact_form.message, name: @contact_form.name, phone: @contact_form.phone, status: @contact_form.status, subject: @contact_form.subject } }, as: :json
    assert_response :success
  end

  test "should destroy contact_form" do
    assert_difference("ContactForm.count", -1) do
      delete contact_forms_url(@contact_form), as: :json
    end

    assert_response :no_content
  end
end

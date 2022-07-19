class ContactForm < ApplicationRecord
  before_create :set_status

  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  validates :email, presence: true, length: { minimum: 2, maximum: 100 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, presence: true, length: { minimum: 2, maximum: 100 }
  validates :message, presence: true, length: { minimum: 2, maximum: 1000 }
  validates :subject, presence: true, length: { minimum: 2, maximum: 100 }

  private

  def set_status
    self.status = "pending"
  end
end

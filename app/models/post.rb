class Post < ApplicationRecord

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment :image, presence: true
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  belongs_to :user
  has_many :comments

end

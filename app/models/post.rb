class Post < ApplicationRecord

  has_attached_file :image,
   styles: { medium: "300x300>", thumb: "100x100>" },
   storage: :s3,
   s3_credentials: Rails.application.credentials.aws,
   s3_region: Rails.application.credentials.aws[:region],
   url: ":s3_domain_url",
   path: '/:class/:attachment/:id_partition/:style/:filename',
   s3_host_alias: "http://image-hide-n-seek.s3.amazonaws.com"

  validates_attachment :image, presence: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  belongs_to :user
  has_many :comments

end

class Comment < ApplicationRecord

  validates :user_id, :post_id, presence: true
  belongs_to :user


end

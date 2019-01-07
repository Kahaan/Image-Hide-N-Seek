class AddIndexToUsersTable < ActiveRecord::Migration[5.2]
  def change
     add_index :users, [:username, :password_digest], unique: true
  end
end

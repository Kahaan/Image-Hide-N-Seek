class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string

  end

  def self.down
    remove_column :users, :session_token
  end

end
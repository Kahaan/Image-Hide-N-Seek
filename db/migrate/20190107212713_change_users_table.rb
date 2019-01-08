class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string
    change_column :users, :session_token, :string, :null => false
    add_index :users, :session_token, unique: true
  end

  def self.down
    remove_column :users, :session_token
  end

end

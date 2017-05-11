namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class city4 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cities", "NameTT", c => c.String());
            DropColumn("dbo.Cities", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Cities", "Name", c => c.String());
            DropColumn("dbo.Cities", "NameTT");
        }
    }
}

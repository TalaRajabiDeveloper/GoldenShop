namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class city2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cities", "Name", c => c.String());
            DropColumn("dbo.Cities", "NameG");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Cities", "NameG", c => c.String());
            DropColumn("dbo.Cities", "Name");
        }
    }
}

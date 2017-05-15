namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Class1", "Father", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Class1", "Father");
        }
    }
}

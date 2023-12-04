

/****** Object:  Table [dbo].[Client]    Script Date: 6/15/2023 9:46:15 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS
(
    SELECT *
    FROM sys.objects
    WHERE object_id = OBJECT_ID(N'dbo.Devices')
)
    BEGIN
        DROP Table Devices;
END;
GO
IF EXISTS
(
    SELECT *
    FROM sys.objects
    WHERE object_id = OBJECT_ID(N'dbo.Clients')
)
    BEGIN
        DROP Table Clients;
END;


CREATE TABLE [dbo].[Clients](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MainId] int NULL,
	[Name] [nvarchar](128) NOT NULL,	
	[IP] [nvarchar](128) NOT NULL,	
	[BillAddress] [nvarchar](128) NULL,
	[MailAddress] [nvarchar](128) NULL,
	[Email] [nvarchar](64) NULL,
	[Phone] [nvarchar](32) NULL,
	[CompanyNo] [nvarchar](128) NULL,
	[VAT] [nvarchar](128) NULL,
	[PrimaryContact] [nvarchar](128) NULL,
	[SecContact] [nvarchar](128) NULL,
	[CreatedAt] [smalldatetime] NULL default sysdatetime(),
	[CreatedBy] [nvarchar](128) NULL,
	[UpdatedAt] [smalldatetime] NOT NULL default sysdatetime(),
	[UpdatedBy] [nvarchar](128) NOT NULL
CONSTRAINT [PK_ClientSites] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO



CREATE TABLE [dbo].[Devices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[IP] [nvarchar](128) NOT NULL,
	[Reachable] [bit] NULL,
	[Status] [nvarchar](16)  NULL,
	[Type] [nvarchar](64) NOT NULL,
	[PatchStatus] [nvarchar](128) NULL,
	[AlertStatus] [nvarchar](128) NULL,
	[CreatedBy] [nvarchar](64) NULL,
	[CreatedAt] [smalldatetime] NULL default sysdatetime(),
	[UpdatedBy] [nvarchar](64) NOT NULL,
	[UpdatedAt] [smalldatetime] NOT NULL default sysdatetime(),
	[ClientId] [int]  NOT NULL
 CONSTRAINT [PK_Devices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


--fk 1-many sites-devices
ALTER TABLE [dbo].[Devices]  WITH CHECK ADD  CONSTRAINT [FK_Devices_Clients] FOREIGN KEY([ClientId])
REFERENCES [dbo].[Clients] ([Id])
GO
ALTER TABLE [dbo].[Devices] CHECK CONSTRAINT [FK_Devices_Clients]
GO


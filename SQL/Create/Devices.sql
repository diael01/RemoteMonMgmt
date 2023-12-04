--USE [VisionRMM_DEV]
--GO

/****** Object:  Table [dbo].[Devices]    Script Date: 6/27/2023 11:40:14 AM ******/
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
CREATE TABLE [dbo].[Devices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[IP] [nvarchar](128) NOT NULL,
	[Reachable] [bit]  NULL,
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



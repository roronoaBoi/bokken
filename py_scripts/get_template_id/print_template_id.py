import requests
import configparser

# postgres_records = ['audit_6f014403067a463eb32f8a97fafe2bfe', 'audit_4c562111c13d4fc798d9ed68a544f499', 'audit_f7a2142efc7c4893a4f08a680956e85e', 'audit_47bbc73e89774501b91a245f54937851', 'audit_0d9b929d5bc14fba92e5347bc16e82bf', 'audit_90e93ed527f4462bba9cc829043f1048', 'audit_10f4cf825c024abcbdac9828fbb717bf', 'audit_eb1a9137b8914d589493eb776520902a', 'audit_a2c7dcdd28cb4acda79f687eacdaa769', 'audit_df70f5dba6ed49078a979b66d346bbb7', 'audit_af38ea4b73b148df985e969f9f4ae3ad', 'audit_88f85b3d3bbb48b98381c2bab8a1e7e6', 'audit_6ade6a3295bb4e8aac8b5ece768a53b1', 'audit_0e42e05aafe04283a63751e488f20b87', 'audit_cce857fed8e74c35a5c3060d8ff50829', 'audit_3ed8333346ba4000b1da6063b48bd8aa', 'audit_81d8418ccde844e3981abbda12bdef5a', 'audit_2c0367c23e7c4810b573c2c4894e0fb0', 'audit_f2a2fd1ed35e4697ac099c80963eaf23', 'audit_919046152a6443729dc93cf4e1e7283a', 'audit_24b3f7e476bc4973818b9f6a70655d7d', 'audit_5663120cb505449bbfe7b9b285ca1ba1', 'audit_8e950de8825842868db804bf0402abf9', 'audit_d1196d0c8cc44d33936f0a5d57d11d87', 'audit_764acf36acba4eaba8d81083c7e7b2e3', 'audit_9c06a6274daf4279808d2d786b12b2f0', 'audit_89f97a0175f44699ba079d824cf841a9', 'audit_18d8071070b847f586990217aafa1510', 'audit_951afd49f04a499abb663d6bd45deb17', 'audit_476ccb8c90354963b6abbd440792bd58', 'audit_22c6b6aeaf3e4b7a81e047322678bae2', 'audit_bd40e535f7bf49e4a8837aa1b4571dd7', 'audit_47a0064f6f794d188fd209b359fdefb8', 'audit_9db13607380c4eca9defa2bf96794530', 'audit_bac273d2e1a54639a9732408f9827a7a', 'audit_3075148a1cee4b9ea68f1a27a74a6f1d', 'audit_4286f034ad8f403eb3bf485c554b2f3f', 'audit_6b682c940a7f44f9b78ff8a426d0365c', 'audit_3df2e61246694044bc162fcc4986c585', 'audit_a27e18ab260c4b6cacde955667388ad6', 'audit_bde526075b0d4e41b138eeb2c2c74777', 'audit_4b4f99bdfbae46e79f8dd8a4ccda6ac8', 'audit_55c35999b2ec4e0084e2c47c2aa640e6', 'audit_217398394853439bb66e4088efcfbe2d', 'audit_c8757c31f4d34b56a66ff924985114c0', 'audit_9a2dece6ece44e3f8b4d93429d906bb0', 'audit_a8ea8205af88455994d332fcd4719ea9', 'audit_67888717b1f34eb3a7c39a5a8e2dc0b5', 'audit_515a2e0c975c413886accbddb3b8f806', 'audit_9f6c4aaa9f1349fcb065d25137b069a1', 'audit_5c7fe537a35e42679707f3acffbf4b6b', 'audit_8daa89d50fc14036b3e796c38b0a6f91', 'audit_3946e8effd47454a8c75b4a04b56c7b5', 'audit_d1534d6497044ab6bf2b57f2b163c568', 'audit_2d4d0aa9673f44ea8526f3bc585dad81', 'audit_6e55b0a451304753938182fff5b60211', 'audit_41be91793325438a96754fb5e6986da4', 'audit_1242ed1fc5ef475483de2a47be9d6ea4', 'audit_8ec3a1ff572d48b887e8051694372e20', 'audit_daca650e93494496afa51ae14c571bd0', 'audit_bffc0ca2c5d944539a2207e7831e678c', 'audit_b68c315426df49baa08a56125a39895e', 'audit_5e35936e12514e1d92599564d6d50aa0', 'audit_579a0e505a3b45898da55edfb4df929c', 'audit_00b8b55e18984168923f96e40ee79a31', 'audit_fdb08f4361c04d0eb0c85b91d0d0dbe7', 'audit_24b4d632b53a427293d9c1a3134e8b26', 'audit_ec6141a91d8640368f54a410a36ee468', 'audit_e3040504b94c4926832d0e43683a72ea', 'audit_0f6fa7ebb0154d7f98d24ad6e272b870', 'audit_02be6c51d7dc4000ade53841e34e1d4c', 'audit_0238ea5b76d944eb8b6cb087e2cb7a38', 'audit_2404e36bef8a4b51aee343738a4142ad', 'audit_5ae1775959554329be890064413c99e9', 'audit_5e8b1cc00510470fa31fc240dcb10c81', 'audit_c20b468cd7154de3b1c6f37e133dfdd4', 'audit_55ac445feff142fa80e4dc5492061054', 'audit_4860eef4bb9a4a49ac382ff178357edc', 'audit_a8e64aef0dce4f948e1df25e341f2f54', 'audit_52889ca2c3424e6f9dc427baeab39807', 'audit_6aabfd8ad3e745ae831b86083b426431', 'audit_c47e0a6d0636445aa0a7b0cc076fd4d2', 'audit_fea9fb6e04fa433f96e0a6c108c763eb', 'audit_9dbde39c7b934da594be51007e20fe21', 'audit_a351451233cc499982947d042ce7b5be', 'audit_c76aaf8dd29a449d8c73fa4f281c6b03', 'audit_ca9c1ea8168642dd8f89e3f6681234ce', 'audit_7e09c8c29aa04ee18d81271f68f72c4c', 'audit_2cb9b91a271d4ea788ebf5e20852742e', 'audit_b30d910af75e4ebbbb2295fc591c6c21', 'audit_e2d75b0e1f19470d888dfcc9e079ca2d', 'audit_be0cff3876484674a79f2d6344f0825b', 'audit_dbc489203e6c4522af81e4d0a53bb8ab', 'audit_ee5c21adf5004569bec745e3076acee8', 'audit_ed5d9355612d4791bf46edaa90be82ae', 'audit_1571591913d04ecdbeb513a37642b69c', 'audit_4e227877903a440d8b8b1ff57f7f8714', 'audit_8c66186d360b456d87211c4266a4ec7a', 'audit_459e3734058445ef94e149b792bdf93d', 'audit_e6e5d11dc2f14bbeb367499cebaa25d7', 'audit_ceb698a853944ed4a74ba1964d7dba64', 'audit_6b9e6c0a3eed43d292cab53bf3ea0e27', 'audit_7a65a7ba8e4545b89b123b5b7a4bc1bb', 'audit_646dfd3ccf7a4b4a8fb3aec75c5c0948', 'audit_f132a3a4b74e4bc6ba8c0c1794671c4a', 'audit_cae42abf4c8f447e86b283d76966a137', 'audit_c1e63595d17b4e56a5dd82e40ec48555', 'audit_322664a507774c9ea4bf8fa52d10a18b', 'audit_c1c312f121484326994e65d80cd079cf', 'audit_5c15d8fd28db42e787b8e86666ba4e36', 'audit_85fd9bad9f204d5da60fe940b699e3c6', 'audit_5f7905711b5c4f3385432344dd72fe61', 'audit_7db7a07014cc4b7bb0e92d81f25b5bee', 'audit_f2e179ca029740b6908f9ce150536136', 'audit_875a8e3f8da045a7966aee72c4c7ed4f', 'audit_7da181ad0cd44318b53db9dcb065c4d5', 'audit_17d9e322ec754c79b70721b50b6bb5fb', 'audit_fdb13b07cf2744798561e49b8d658168', 'audit_db699e1ff5da482ba224187aa4557376', 'audit_c28cfab807ce42f39154e41dc3e49da7', 'audit_db12ac24e5a54e77838a9bfc8e4012b2', 'audit_6fe031fe5875454f9fffb49418d9c8ab', 'audit_92013f2a2bea49849cd70b80671d8ffe', 'audit_e2ee2ef9cc32402f93c5bf000e1f3424', 'audit_c949ebc6c774451ca836f91d03904bb8', 'audit_8ef0f5b174034256b8a5c27a0bd8493f', 'audit_26821f4c66044fad9f3286e7aa18ea49', 'audit_1ad394d2a335494698511600db2503f3', 'audit_043cb8fdfe3b4dd4b5472436b0f58ba2', 'audit_30827c85937c40f19d6e6addafa847f2', 'audit_1faa4d08d63f443b8265284db9128878', 'audit_a772d067e5b6453aa6f101d232fce85b', 'audit_e1a9fe34f1214450af9388976a516732', 'audit_49d180a90f1c4697aee36efe9104a469', 'audit_6a8e7eda1d2b49968bd4465d7066f241', 'audit_d268aa2c56a441b98019b278a123654e', 'audit_1d2bd63fa86c461fa4b1edebb248ffb9', 'audit_b710671c67034ba8b7a2a88e0c24644a', 'audit_4a38e04b31e04b1c92ffd3190a4f53d6', 'audit_29744e990aee4d7491a0089d5e4f1758', 'audit_69ec69def2944b2194ba70679a29c7c9']

# for record in postgres_records:
#     print(f"{record} is awesome!")

config = configparser.ConfigParser()
config.read('config.ini')

token = config['scriptsettings']['token']

url = "https://api.safetyculture.io/audits/audit_b3645daa3cb64829a9af252f336e11a6"

headers = {
    "accept": "application/json",
    "sc-integration-id": "sc-readme",
    "authorization": "Bearer " + token 
}

response = requests.get(url, headers=headers)

print(response.json()['template_id'])

#pick up on this use case later!